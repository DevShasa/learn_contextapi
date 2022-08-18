import { faker } from '@faker-js/faker';

const fakeData = (num) =>{

    if(localStorage.getItem("fakeDB")){
        console.log("RECYCLED DATA")
        return JSON.parse(localStorage.getItem("fakeDB"))
    }else{
        const fakeArr = []
        for(let i = 0 ;  i < num; i++){
        const fakeinfo = {
            id: faker.datatype.uuid(),
            name: `${faker.commerce.productAdjective() } ${faker.commerce.product()}`,
            price:faker.commerce.price(100, 200),
            image: faker.image.abstract(1234, 2345, true),
            description: faker.commerce.productDescription(),
        }
        fakeArr.push(fakeinfo)
        }
        localStorage.setItem("fakeDB",JSON.stringify(fakeArr))
        console.log("FETCHED NEW DATA")
        return fakeArr
    }
}

export default fakeData