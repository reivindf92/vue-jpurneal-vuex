
    export  default () => ({
        isLoading :true,
        entries : [ 
            {
                id: new Date().getTime(),
                date: new Date().toDateString(),
                text :'Lorem Lorem Lorem Lorem Lorem Lorem Lorem 3Lorem',
                picture : null,


            },
            {
                id: new Date().getTime() + 1000,
                date: new Date().toDateString(),
                text :'2Lorem Lorem Lorem Lorem Lorem Lorem Lorem 3Lorem',
                picture : null,


            },
            {
                id: new Date().getTime(),
                date: new Date().toDateString(),
                text :'L33333orem Lorem Lorem Lorem Lorem Lorem Lorem 3Lorem',
                picture : null,


            }
        ]
})
