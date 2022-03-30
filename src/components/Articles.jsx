export default _ => {
    const articles = [{
        img: 'abc.png',
        title: 'hello',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    }, {
        img: 'cba.png',
        title: 'test1',
        text: 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'
    }
    ]

    return (        
            <div class="col-10">
                {articles.map((article) => {
                    return (
                        <div class="row mt-4">
                            <div class="col-3"><img src={article.img} title={article.title}></img></div>
                            <div class="col-9 ">{article.text}</div>      
                        </div>                        
                    )
                })}
                 
            </div>          
    
    );
}