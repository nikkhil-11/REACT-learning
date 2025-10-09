

const Cards = ({
    title,
    date,
    desc ,msg, msg2
})=>{



    return  <div className="border w-full">
<h1>{title}</h1>
<p>{date}</p>

{/* {
    msg ?  <div style={{
        height: '100px'
    }}>
        {msg}
    </div> : <div>No msg</div>
} */}
{/* {
    (msg || msg2 )    &&  <div style={{
        height: '100px'
    }}>
        {msg || msg2}
    </div>
} */}


{
    msg ?  <div style={{
        height: '100px'
    }}>
        {msg}
    </div> : msg2 ? <div style={{
        height: '100px'
    }}>
        {msg2}
    </div>: null
}

<p>{desc}</p>
    </div>
}



export default Cards