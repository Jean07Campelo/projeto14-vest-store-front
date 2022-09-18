import { useState, useEffect } from 'react';
import { ShoppingCart, User } from 'phosphor-react';
import { Link } from 'react-router-dom';

import Category from './Category';
import Product from './Product';

import { getHome } from '../../assets/services/request.js';

import { Header, HomeContainer, HomeBody, CategoriesWrapper, ProductsWrapper, SectionTitle } from './StyledComponentsHome';

import logo from '../../assets/logo.png'

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getHome().then(res => {
            setProducts(res.data.products);
        }).catch(e => {
            console.log(e);
        })
    }, []);

    return (
        <HomeContainer>
            <Header>
                <Link to='/'>
                    <User size={'2rem'} />
                </Link>
                <img src={logo} alt='Logo' width='35px' height='35px' />
                <Link to='/'>
                    <ShoppingCart size={'2rem'} />
                </Link>
            </Header>

            <HomeBody>
                <SectionTitle>
                    Categorias
                </SectionTitle>

                <CategoriesWrapper>
                    <Link to='/category/camisetas'>
                        <Category title={'Camisetas'} imgIcons={'tshirt'} />
                    </Link>
                    <Link to='/category/calcas'>
                        <Category title={'Calças'} imgIcons={'pants'} />
                    </Link>
                    <Link to='/category/sapatos'>
                        <Category title={'Sapatos'} imgIcons={'shoe'} />
                    </Link>
                    <Link to='/category/acessorios'>
                        <Category title={'Acessórios'} imgIcons={'accessory'} />
                    </Link>
                </CategoriesWrapper>

                <SectionTitle>
                    Produtos
                </SectionTitle>

                <ProductsWrapper>
                    {products.length !== 0 ? products.map(product => <Product productObj={product} />) : 'Não tem nada aqui'}
                </ProductsWrapper>

            </HomeBody>

        </HomeContainer>
    );

}

