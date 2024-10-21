
// let CreateBlog = (title,body) => {
//     if (!title && !body) {
//         throw console.error("title required");
        
//     }
//     return `${title} - ${body}`
// }

// CreateBlog('Title','Body');


let india = { 
    
    states : ['GUJRAT','MH','ANDAMAN NICOBAR'],

    sampleFunction:function()
    {
        setTimeout( () => console.log(this.states.join(' - ')),3000);
    }

};

india.sampleFunction();