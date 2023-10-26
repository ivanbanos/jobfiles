import PartsProcessOptions from '../configuration/partsProcess'

const getPart = (part) => {
  try {
    return PartsProcessOptions.filter((element) => element.part == part.part)[0]
  } catch (error) {
    return 'fail'
  }
}

export default getPart
