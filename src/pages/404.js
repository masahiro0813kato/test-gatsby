import * as React from "react"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center", height: "70vh" }}>
        <h1>404: not Found</h1>
        <p>ページがみつかりません。</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
