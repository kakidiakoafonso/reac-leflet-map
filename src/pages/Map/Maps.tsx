import React, { FormEvent } from 'react'
import { MapContainer, TileLayer,Marker,Popup,useMapEvents,Tooltip } from 'react-leaflet'
import { LatLngExpression} from "leaflet";
import 'leaflet/dist/leaflet.css';
import * as S from './style'
import { Icon,layerConfig} from './helpers'
import { BsFillTrashFill} from 'react-icons/bs'
import * as types from './types'

const initialPosition:LatLngExpression =  {lat:-8.838333, lng:13.234444};
export  function Maps() 
{
  const [title, setTitle] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')
  const [lat, setlat] = React.useState<number>(0)
  const [lng, setlng] = React.useState<number>(0)
  const [markedPlaces, setmarkedPlaces] = React.useState<types.MarkedPlaces[]>([])
  
  function Events() {
    const map = useMapEvents({
      click: (e) => {
          const { lat, lng } = e.latlng;
          setlat(lat)
          setlng(lng)    
        }
      }
    )  
    return null
  }
  function getLocation() {
    const location = navigator.geolocation.getCurrentPosition
    console.log(location);
    
  }
  
  function HandleSubmit(e:FormEvent) {
    e.preventDefault()
    const day = new Date().getDate()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    const createdAt = `${day}/${month}/${year}`

    const newMark:types.MarkedPlaces = {
      id:(markedPlaces.length+1),
      description,
      title,
      createdAt,
      coords:{
        lat,lng
      }
    }
    setmarkedPlaces(prev=>[...prev,newMark])
    setDescription('')  
    setTitle('')  
    setlat(0)  
    setlng(0) 
    localStorage.setItem('markedPlaces',JSON.stringify(markedPlaces))
  }
  function removeMarkedPlace(placeId:number) {
    const filteredMarkedPlace:types.MarkedPlaces[]= markedPlaces.filter(markedPlace=> {return markedPlace.id!==placeId}) 
    setmarkedPlaces(filteredMarkedPlace)
    localStorage.setItem('markedPlaces',JSON.stringify(filteredMarkedPlace))
  }
    React.useEffect(()=>{
      getLocation()
      const storageData:string|null = localStorage.getItem('markedPlaces')
      if(storageData) setmarkedPlaces(JSON.parse(storageData))
    },[])
  return (
    <S.Container>
      
      <S.FormContainer>
        <S.Form onSubmit={HandleSubmit}>
          <S.Label>Latitude</S.Label>
          <S.Input type='number' placeholder='lat'  value={lat} onChange={(e)=> setlat(Number(e.target.value))}/>

          <S.Label>Longitude</S.Label>
          <S.Input type='number' placeholder='lng' value={lng} onChange={(e)=> setlng(Number(e.target.value))}/>

          <S.Label>Title</S.Label>
          <S.Input type='text' placeholder='title'  value={title} onChange={(e)=> setTitle(e.target.value)}/>

          <S.Label>Description</S.Label>
          <S.Input type='text' placeholder='description' value={description} onChange={(e)=> setDescription(e.target.value)}/>

          <S.SubmitButton>
            Assign
          </S.SubmitButton>
        </S.Form>
      </S.FormContainer>
      <S.MapContainer>
      <MapContainer
          center={initialPosition}
          style={{width:'100%',height:'100%'}}
          zoom={13}    
        >
          <TileLayer
            attribution={layerConfig.attribution}
            url={layerConfig.url}
          />
          <Events />


          {
            markedPlaces.map((markerPlace:types.MarkedPlaces)=>(
              <Marker icon={Icon([40,40])}
                position={markerPlace.coords}
                eventHandlers={{
                }}>
                  <Popup>
                    <S.PopUpWrapper>
                      <S.Title>{markerPlace.title || 'No title available'}</S.Title>
                      <S.Description>{markerPlace.description || 'No description available'}</S.Description>
                        <S.Date>{markerPlace.createdAt}</S.Date>
                        <S.Delete 
                          onClick={()=>removeMarkedPlace(markerPlace.id)}>
                            Delete
                            <BsFillTrashFill size={20} color="red"/>
                          </S.Delete>
                    </S.PopUpWrapper>
                  </Popup>

                  <Tooltip>
                    <S.PopUpWrapper>
                    <S.Title>{markerPlace.title || 'No title available'}</S.Title>
                      <S.Description>{markerPlace.description || 'No description available'}</S.Description>
                        <S.Date>{markerPlace.createdAt}</S.Date>
                    </S.PopUpWrapper>
                  </Tooltip>
                </Marker>
            ))
          }
        </MapContainer>
          </S.MapContainer>
    </S.Container>
  )
}
