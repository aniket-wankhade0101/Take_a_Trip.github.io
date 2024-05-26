import React from "react";


const destiSearch = () => {
    return (
        <>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        {
                            destination.map((cval) => {
                                return (
                                    <>
                                        <div className="col-md-4" key={cval.id} >
                                            <Card style={{ width: '20rem' }}>
                                                <Card.Img variant="top" src={cval.cover} height={300} />
                                                <Card.Body>
                                                    <Card.Title>{cval.title}</Card.Title>
                                                    <Card.Text>
                                                        {cval.text}
                                                    </Card.Text>
                                                    <Button variant="primary">Know More</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default destiSearch;