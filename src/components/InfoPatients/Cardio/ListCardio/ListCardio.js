import React ,{useState,useEffect} from 'react'
import {Loader,Pagination} from 'semantic-ui-react'
import { size, map } from 'lodash'
import { CardioItem } from '../CardioItem'
import {Cardio} from '../../../../api/infoPatients'
import { useAuth } from '../../../../hooks'
import './listCardio.scss'

const cardioController= new Cardio()
export function ListCardio(props) {
    const {accessToken}=useAuth()
    const {reload, field, value,onReload, page , changePage}= props

    const [data, setData]=useState(null)
    const [pagination, setPagination] = useState();
    
    useEffect(() => {
      (
        async ()=>{

            try {
                if(!field){
                    const response= await cardioController.getCardios(accessToken,null,null,page)
                    setData(response.docs)
                    setPagination({
                      limit: response.limit,
                      page: response.page,
                      pages: response.pages,
                      total: response.total,
                    });

                    console.log(response.page)
                    
                }else{
                    const response= await cardioController.getCardios(accessToken,field,value,page)
                    setData(response.docs)
                    setPagination({
                      limit: response.limit,
                      page: response.page,
                      pages: response.pages,
                      total: response.total,
                    });
                }
                
               
            } catch (error) {
                console.log(error)
            }

        }
      )()
    }, [page,field,reload])

  

    
    
    if(!data) return <Loader active inline='centered' />
    if(size(data)===0) return "No existen pacientes"
    
  return (
    
    <div className='list-cardio'>
      <div className="paginas">
        <Pagination
          totalPages={pagination.pages}
          defaultActivePage={pagination.page}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          onPageChange={changePage}
        />
      </div>

        {
    map(data,(cardio)=>( 
    <CardioItem key={cardio._id} cardio={cardio} onReload={onReload} /> ))}


  </div>
  
  
  )
}
