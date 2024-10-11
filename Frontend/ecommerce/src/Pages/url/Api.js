const backendUrl = 'http://localhost:5000';

const simmaryapi={
    signup:{
        url:`${backendUrl}/signup`,
        method:'POST'
    },
    signin:{
        url:`${backendUrl}/signin`,
        method:'POST'
    },
    getuser:{
        url:`${backendUrl}/user-details`,
        method:'GET'
    },
   logout:{
    url:`${backendUrl}/logout`,
        method:'GET'
    },
    allusers:{
        url:`${backendUrl}/allusers`,
        method:'GET'
    },
    changeuserroll:{
        url:`${backendUrl}/changeuserroll`,
        method:'Put'
    },
    uploadproducts:{
        url:`${backendUrl}/addproduct`,
        method:'POST'
    },
    allproducts:{
        url:`${backendUrl}/getproducts`,
        method:'GET'
    },
    getallproductshomepage:{
        url:`${backendUrl}/getproductbycategory`,
        method:'GET'
    },
    getcategorywiseproduct:{
        url:`${backendUrl}/getcategorywise`,
        method:'POST'
    },
    getproductdetails:{
        url:`${backendUrl}/productdetails`,
        method:'POST'
    },
    addtocart:{
        url:`${backendUrl}/addtocart`,
        method:'POST'
    },
    countdocument:{
        url:`${backendUrl}/countdocument`,
        method:'GET'
    },addtocartproduct:{
        url:`${backendUrl}/addtocartproducts`,
        method:'POST'
    },
    updateaddtocartproduct:{
        url:`${backendUrl}/updateaddtocartproduct`,
        method:'POST'
    },
    deleteaddtoCartProduct:{
        url:`${backendUrl}/deleteaddtocartproduct`,
        method:'POST'
    },inputproduct:{
        url:`${backendUrl}/searchproduct`,
        method:'POST'
    }


   }


export default simmaryapi