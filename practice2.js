let courseName = "JavaScript";
function practiceScope() {
    
    let topic = "Variables";
    console.log(courseName + " - " + topic);
    
    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail);
        const scope = "Next Scopes";
        console.log(scope);
        var nextblockScopes = "Block Scopes";
        console.log(nextblockScopes);
    }  
    
}
practiceScope()