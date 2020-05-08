import React from "react";

type PageProps = {
    children: React.ReactNode
}

const Page = ({children}: PageProps) => {

    return (
        <div style={{
                backgroundColor:'#C6D3D0',
                height: '100vh',
                display:'flex',
                justifyContent: "center",
                alignItems:'center',}}
        >
            {children}
        </div>
    )
}

export default Page;