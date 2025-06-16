import React from 'react'
interface IdBlog {
    params:{id:string},
    searchParams:""
}
function IDBlog({params}:IdBlog) {
  return <div>IDBlog{params.id}</div>;
}

export default IDBlog