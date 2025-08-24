const fs=require('fs');
const users=(JSON.parse(fs.readFileSync('C:\\Users\\princ\\OneDrive\\Desktop\\node JS\\public\\user.json',"utf-8"))).users;
exports.createuser=(req,res)=>{
    let user=req.body;
    users.push(user);
    res.status(201).json(user);
};
exports.getallusers=(req,res)=>{
    res.json(users);
};
exports.getuser=(req,res)=>{
    const id=+req.params.id;
    let user=users.find(p=>p.id===id);
    res.json(user);
};
exports.replaceuser=(req,res)=>{
    const id=+req.params.id;
    let userindex=users.findIndex(p=>p.id===id);
    users.splice(userindex,1,{...req.body,id:id});
    res.status(200).json(users[userindex]);
};
exports.updateuser=(req,res)=>{
    const id=+req.params.id;
    let userindex=users.findIndex(p=>p.id===id);
    const user=users[userindex];
    users.splice(userindex,1,{...user,...req.body});
    res.status(200).json(users[userindex]);
};
exports.deleteuser=(req,res)=>{
    const id=+req.params.id;
    let userindex=users.findIndex(p=>p.id===id);
    const user=users[userindex];
    users.splice(userindex,1);
    res.status(200).json(user);
};