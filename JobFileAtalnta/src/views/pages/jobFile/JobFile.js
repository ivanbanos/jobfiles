import { React, useState, useRef } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
} from '@coreui/react'
import '../../../App.css'
import Toast from '../../toast/Toast'
import PiecesOptions from '../../../configuration/pieces'
import ProductsOptions from '../../../configuration/products'
import PartsOptions from '../../../configuration/parts'
import Coleurs from '../../../configuration/coleurs'
import Part from '../../../model/part.ts'
import createFile from '../../../services/CreateFile'

const PartCard = (props) => {
  const [box, setBox] = useState(1)
  const [quantity, setQuantity] = useState(0)
  const [wide, setWide] = useState(0)
  const [height, setHeight] = useState(0)
  const [handleHeight, setHandleHeight] = useState(0)

  const handlePartChange = (event) => {
    props.part.part = event.target.value
    props.setPart(props.part)
  }
  const handleBoxChange = (event) => {
    props.part.box = event.target.value
    props.setPart(props.part)
    setBox(event.target.value)
  }
  const handleQuantityChange = (event) => {
    props.part.quantity = event.target.value
    props.setPart(props.part)
    setQuantity(event.target.value)
  }
  const handleWideChange = (event) => {
    props.part.wide = event.target.value
    props.setPart(props.part)
    setWide(event.target.value)
  }
  const handleHeightChange = (event) => {
    props.part.height = event.target.value
    props.setPart(props.part)
    setHeight(event.target.value)
  }
  const handleHandleHeightChange = (event) => {
    props.part.handleHeight = event.target.value
    props.setPart(props.part)
    setHandleHeight(event.target.value)
  }
  const removePart = (event) => {
    props.removePart(props.part)
  }
  return (
    <>
      <CCard>
        <CCardBody>
          <label>{props.part.product}</label>
          <CRow>
            <CCol xs={4}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Box</CInputGroupText>
                <CFormInput placeholder="Box" name="box" value={box} onChange={handleBoxChange} />
              </CInputGroup>
            </CCol>
            <CCol xs={4}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Part</CInputGroupText>
                <CFormSelect aria-label="Default select example" onChange={handlePartChange}>
                  <option value={''}>Select one</option>
                  {PartsOptions.filter(
                    (element) => element.product === props.part.product,
                  )[0].parts.map((part) => (
                    <option key={'col' + part.id} value={part.desc}>
                      {part.desc}
                    </option>
                  ))}
                </CFormSelect>
              </CInputGroup>
            </CCol>

            <CCol xs={4}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Quantity</CInputGroupText>
                <CFormInput
                  placeholder="Quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </CInputGroup>
            </CCol>

            <CCol xs={4}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Wide</CInputGroupText>
                <CFormInput
                  placeholder="Wide"
                  name="box"
                  value={wide}
                  onChange={handleWideChange}
                />
              </CInputGroup>
            </CCol>

            <CCol xs={4}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Height</CInputGroupText>
                <CFormInput
                  placeholder="Height"
                  name="height"
                  value={height}
                  onChange={handleHeightChange}
                />
              </CInputGroup>
            </CCol>

            <CCol xs={4}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Handle Height</CInputGroupText>
                <CFormInput
                  placeholder="Handle Height"
                  name="handleHeight"
                  value={handleHeight}
                  onChange={handleHandleHeightChange}
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CButton color="primary" className="px-4" onClick={removePart}>
            remove part
          </CButton>
        </CCardBody>
      </CCard>
    </>
  )
}

const PartsTable = (props) => {
  const handlePartChange = (part) => {
    let partIndex = props.parts.findIndex((partElement) => partElement.id === part.id)
    props.parts[partIndex].box = part.box
    props.setParts(props.parts)
  }
  const removePart = (part) => {
    props.removePart(part)
  }
  return (
    <>
      {props.parts.map((part) => (
        <PartCard
          key={'col' + part.id}
          part={part}
          setPart={handlePartChange}
          removePart={removePart}
        />
      ))}
    </>
  )
}

const JobFile = () => {
  const [client, setClient] = useState()
  const [commande, setCommande] = useState()
  const [filename, setFilename] = useState()
  const [units, setUnits] = useState()
  const [coleur, setColeur] = useState()
  const [product, setProduct] = useState()
  const [productOptions, setProductOptions] = useState([])
  const [parts, setParts] = useState([])

  const handlePiecesChange = (event) => {
    setProduct('')
    try {
      setProductOptions(
        ProductsOptions.filter((element) => element.piece === event.target.value)[0].products,
      )
    } catch (error) {
      setProductOptions([])
    }
  }
  const handleProductChange = (event) => {
    setProduct(event.target.value)
  }
  const handleColeurChange = (event) => {
    setColeur(event.target.value)
  }
  const handleUnitsChange = (event) => {
    setUnits(event.target.value)
  }
  const handleClientChange = (event) => {
    var filename = ''
    var d = new Date()
    var cust = event.target.value + '-' + commande
    let dateString =
      d.getFullYear() +
      '' +
      ('0' + (d.getMonth() + 1)).slice(-2) +
      '' +
      ('0' + d.getDate()).slice(-2)
    filename += dateString + '-' + cust + '.csv'
    setFilename(filename)
    setClient(event.target.value)
  }
  const handleFileNameChange = (event) => {
    setFilename(event.target.value)
  }
  const handleCommandeChange = (event) => {
    var filename = ''
    var d = new Date()
    var cust = client + '-' + event.target.value
    let dateString =
      d.getFullYear() +
      '' +
      ('0' + (d.getMonth() + 1)).slice(-2) +
      '' +
      ('0' + d.getDate()).slice(-2)
    filename += dateString + '-' + cust + '.csv'
    setFilename(filename)
    setCommande(event.target.value)
  }
  const addPart = (event) => {
    if (product !== '') {
      let part = new Part()
      part.product = product
      if (parts.length > 0) {
        part.id = Math.max(...parts.map((member) => member.id)) + 1
        console.log(part.id)
      } else {
        part.id = 1
      }
      setParts([...parts, part])
    }
  }
  const removePart = (part) => {
    setParts(parts.filter((partElement) => partElement.id !== part.id))
  }

  const toastRef = useRef()

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault()
    let data = createFile(parts, coleur, client, commande, units)
    var filename = ''
    var d = new Date()
    var cust = client + '-' + commande
    let dateString =
      d.getFullYear() +
      '' +
      ('0' + (d.getMonth() + 1)).slice(-2) +
      '' +
      ('0' + d.getDate()).slice(-2)
    filename += dateString + '-' + cust + '.csv'
    var pom = document.createElement('a')
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data))
    pom.setAttribute('download', filename)
    pom.style.display = 'none'
    document.body.appendChild(pom)
    pom.click()
    document.body.removeChild(pom)

    toastRef.current.showToast('Téléchargement  réussi')
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Toast ref={toastRef}></Toast>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12}>
            <CCard>
              <CCardHeader className="text-center">
                <CRow>
                  <CCol xs={4}>
                    <img
                      alt="Client"
                      id="logo"
                      style={{ margin: '10pt' }}
                      src={require('../../../assets/images/Client.png')}
                    />
                  </CCol>
                  <CCol xs={4}>
                    <h2>JOBFILE MANAGER HAFFNER SC220-80</h2>
                  </CCol>
                  <CCol xs={4}>
                    <img
                      alt="Haffner"
                      id="logo"
                      src={require('../../../assets/images/Haffner.png')}
                    />
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <CForm>
                  <CRow>
                    <CCol xs={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Customer</CInputGroupText>
                        <CFormInput
                          placeholder="Client"
                          name="client"
                          value={client}
                          autoComplete="client"
                          onChange={handleClientChange}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>File name</CInputGroupText>
                        <CFormInput
                          placeholder="File Name"
                          name="filename"
                          value={filename}
                          autoComplete="filename"
                          disabled
                          onChange={handleFileNameChange}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Commande No.</CInputGroupText>
                        <CFormInput
                          placeholder="Commande No."
                          name="commande"
                          value={commande}
                          autoComplete="commande"
                          onChange={handleCommandeChange}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Units</CInputGroupText>
                        <CFormSelect
                          aria-label="Default select example"
                          onChange={handleUnitsChange}
                        >
                          <option value={''}>Select one</option>
                          <option value={'Inches'}>Inches</option>
                          <option value={'Millimeters'}>Millimeters</option>
                        </CFormSelect>
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Pieces</CInputGroupText>
                        <CFormSelect
                          aria-label="Default select example"
                          onChange={handlePiecesChange}
                        >
                          <option value={''}>Select one</option>
                          {PiecesOptions.map((piece) => (
                            <option key={'col' + piece.id} value={piece.desc}>
                              {piece.desc}
                            </option>
                          ))}
                        </CFormSelect>
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Product Line</CInputGroupText>
                        <CFormSelect
                          aria-label="Default select example"
                          onChange={handleProductChange}
                          value={product}
                        >
                          <option value={''}>Select one</option>
                          {productOptions.map((product) => (
                            <option key={'col' + product.id} value={product.desc}>
                              {product.desc}
                            </option>
                          ))}
                        </CFormSelect>
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Coleur</CInputGroupText>
                        <CFormSelect
                          aria-label="Default select example"
                          onChange={handleColeurChange}
                        >
                          <option value={''}>Select one</option>
                          {Coleurs.map((coleur) => (
                            <option key={'col' + coleur.id} value={coleur.desc}>
                              {coleur.desc}
                            </option>
                          ))}
                        </CFormSelect>
                      </CInputGroup>
                      <CButton color="primary" className="px-4" onClick={addPart}>
                        Add part
                      </CButton>
                    </CCol>
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4" onClick={handleSubmit}>
                        Generate file
                      </CButton>
                    </CCol>
                  </CRow>
                  <PartsTable parts={parts} setParts={setParts} removePart={removePart} />
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default JobFile
