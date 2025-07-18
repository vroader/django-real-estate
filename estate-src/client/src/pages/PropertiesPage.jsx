import React, {useEffect} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import Spinner from "../components/Spinner";
import {toast} from 'react-toastify';
import Property from '../components/Property';
import { getProperties, reset } from '../features/properties/propertySlice.js'
import Title from '../components/Title';

const PropertiesPage = () => {
  const {properties, isLoading, isError,message} = useSelector((state) => state.properties);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isError) {
      toast.error(message, {icon:"😭"});
    }
    dispatch(getProperties());
  }, [dispatch,isError, message]);

  if (isLoading) {
    return <Spinner />
  };

  return (
    <>
      <Title title='Our Properties Catalog'/>
        <Container className='mt-5'>
            <Row>
                <Col className='mg-top text-center'>
                    <h1>Our Catalog of properties</h1>
                    <hr className='hr-text'/>
                </Col>
            </Row>
            {
              <>
                <Row className='mt-3'>
                  {properties.map((property) =>(
                    <Col 
                      key={property.id} 
                      sm={12}
                      md={6}
                      lg={4}
                      xl={3}
                      >
                        <Property property={property}/>
                    </Col>
                      )
                    )
                  }                      
                </Row>
              </>
            }
        </Container>    
    </>
  );
};

export default PropertiesPage;
