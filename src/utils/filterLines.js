export default function filterLines(data) {
  const filtered = [];
  const sharedLines = [];
  const alreadyFiltered = [];
  const nonsharedLines = [];
  data.forEach((line, i) => {
    if (line.variant_title !== "" && !alreadyFiltered.includes(line.variant_title)) {
      let sharedVariant = [];
      for (let j = (i+1); j < data.length; j++) {
        alreadyFiltered.push(line.variant_title);
        if (line.variant_title === data[j].variant_title) {
          if (sharedVariant.length === 0) {
            sharedVariant.push(line);
          }
          sharedVariant.push(data[j]);
        }
      }
      if (sharedVariant.length > 0) {
        sharedLines.push(sharedVariant);
      } else {
        nonsharedLines.push(line);
      }
    } else if (line.variant_title === "") {
      nonsharedLines.push(line);
    }
  });
  nonsharedLines.forEach(nonsharedLine => {
    filtered.push({
      title: nonsharedLine.title,
      quantity: nonsharedLine.quantity,
      quantityInfo: `${nonsharedLine.quantity}x ${nonsharedLine.variant_title !== '' ? nonsharedLine.variant_title : nonsharedLine.title}`,
      image: nonsharedLine.image,
      price: nonsharedLine.quantity * parseFloat(nonsharedLine.price, 10)
    });
  });
  sharedLines.forEach(sharedLine => {
    let completeLine = {
      title: '',
      quantity: 0,
      quantityInfo: '',
      image: '',
      price: 0
    }
    sharedLine.forEach((line, index) => {
      // Create correct line title
      let untouchedLineTitle = line.title;
      if (completeLine.title === '') {
        completeLine.title = line.title;
      } else {
        let partsA = completeLine.title.split(" ");
        let partsB = line.title.split(" ");
        if (partsA.length === partsB.length) {
          let title = "";
          for (let i = 0, len = partsA.length; i < len; i++) {
            if (partsA[i] === partsB[i]) {
              title += i === 0 ? partsA[i] : ` ${partsA[i]}`;
            }
          }
          completeLine.title = title;
        } else {
          completeLine.title = partsA.length > partsB.length ?
            partsB.join(" ") : partsA.join(" ");
        }
      }

      // Create correct price / variant info
      completeLine.quantity += line.quantity;
      if (index === 0) {
        completeLine.quantityInfo = `${line.quantity}x ${untouchedLineTitle}`;
        completeLine.price = line.quantity * parseFloat(line.price, 10);
        completeLine.image = line.image;
      } else {
        let vt = completeLine.quantityInfo;
        vt += `, ${line.quantity}x ${line.title}`;
        completeLine.quantityInfo = vt.replace(new RegExp(`${completeLine.title} `, 'ig'), '');
        completeLine.price += line.quantity * parseFloat(line.price, 10);
      }
    });
    filtered.push(completeLine);
  });
  return filtered;
};
