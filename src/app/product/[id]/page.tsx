import React from 'react'

interface IDProps{
    params:{id:string},
    searchParams:"",
}

function IdProduct({ params }: IDProps) {
  return <div>IdProduct : {params.id} </div>;
}

export default IdProduct;