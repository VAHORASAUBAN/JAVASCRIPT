
let CreateBlog = (title,body) => {
    if (!title && !body) {
        throw console.error("title required");
        
    }
    return `${title} - ${body}`
}

CreateBlog('Title','Body');
