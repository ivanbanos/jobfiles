import getPart from './GetPart'

const getLenghtInFormat = (lenght) => {
  lenght = Math.trunc(lenght * 10)
  return lenght.toString().padStart(5, '0')
}

const createRows = (part, color, client, commande, number, units) => {
  console.log(part)
  if (units == 'Inches') {
    part.wide = part.wide * 0.0254
    part.height = part.height * 0.0254
  }
  let partDesc = getPart(part)
  if (partDesc == 'fail') {
    return []
  }
  let rows = []
  var d = new Date()
  let date =
    d.getFullYear() +
    '/' +
    ('0' + (d.getMonth() + 1)).slice(-2) +
    '/' +
    ('0' + d.getDate()).slice(-2)
  let extraColeur = color === 'ANODISER' ? color : ''
  console.log(partDesc)
  console.log(partDesc)
  partDesc.process.forEach((process) => {
    let mainProfile = process.name
    let pieceRow = ''
    pieceRow +=
      '1,15000,1,' +
      getLenghtInFormat(partDesc.lengthFormula(Number(part.wide), Number(part.height))) +
      ',90,90,'
    pieceRow += mainProfile + ' ' + extraColeur + ','
    pieceRow +=
      color + ' , , , ,' + number + ',' + ' , , , , ,' + commande + ',' + client + ',' + date + ','
    pieceRow += process.process + ','
    pieceRow += ',0,' + color + ',' + mainProfile + ' ' + extraColeur + ',,,'
    pieceRow += process.process + ' ' + extraColeur + ','
    let quantity = part.quantity

    for (let i = 0; i < quantity; i++) {
      rows.push(pieceRow)
    }
  })
  return rows
}

const createFile = (parts, color, client, commande, units) => {
  try {
    var file =
      'id ,ksn ,ksnbar ,ktn ,ktnbar ,l ,r ,code ,info ,width ,height ,trolley ,box ,orientation ,reinf ,reinfbar ,pos ,prono ,offno ,customer ,date ,nccode ,isfix ,colorcode ,colorinfo ,mainprofile ,subcust ,image ,DATA1 ,DATA2 ,DATA3 ,DATA4 ,DATA5' +
      '\r\n'
    let currentId = 0
    for (let i = 0; i < parts.length; i++) {
      var rows = createRows(parts[i], color, client, commande, 1, units)
      for (let j = 0; j < rows.length; j++) {
        currentId = currentId + 1
        file += currentId + ',' + rows[j] + '\r\n'
      }
    }

    return file
  } catch (error) {
    console.log(error)
    return 'fail'
  }
}

export default createFile
