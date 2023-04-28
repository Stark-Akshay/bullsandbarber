import React from 'react'
import AdminUsage from '../../components/AdminUsage'
import Head from 'next/head'
import { useEffect } from 'react'

const AdminPages = () => {

  return (
    <>
    <Head>
    <title>Admin Page</title>
    </Head>
    <AdminUsage />
    </>
    
  )
}

export default AdminPages