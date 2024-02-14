import express from 'express';

const router = express.Router();

const Student = [
 {
    id:1,
    name:"Karlo",
    age:21,
    course:"BSIT"
 },
 {
    id:2,
    name:"Jepp",
    age:21,
    course:"BSBA"
 },
 {
    id:3,
    name:"Faith",
    age:18,
    course:"BM"
 },
 {
    id:4,
    name:"Francess",
    age:19,
    course:"BSTM"
 },

 {
    id:5,
    name:"Raiza",
    age:20,
    course:"BSCE"
 },
]



router.get('/',(req,res)=>{
    res.json(Student)
}) 


router.get('/:id',(req,res)=>{

const IDS = Student.find((element) => element.id === +req.params.id);

if(!IDS){
   return res.status(404).json({status:"Notfound"})
}

res.json({status:true,data:IDS})

});


//Post A DATA


router.post('/:id',(req,res)=>{

   const IDS = Student.find((element) => element.id === +req.params.id);
   
   if(!IDS){
      return res.status(404).json({status:"Notfound"})
   }

   const DATA = {
      id: Student.length +1,
      name:req.body.name,
      age:req.body.age,
      course:req.body.course
   }
   
   res.json({status:true,data:DATA})
   
   });


   //PUT


   router.put('/:id',(req,res)=>{

      const IDS = Student.find((element) => element.id === +req.params.id);
      
      if(!IDS){
         return res.status(404).json({status:"Notfound"})
      }
   
    IDS.age = req.body.age || IDS.age;
    IDS.course = req.body.course || IDS.course;

      
      res.json({status:true,data:IDS})
      
      });


      //DELETE


      router.delete('/:id',(req,res)=>{

         const IDS = Student.find((element) => element.id === +req.params.id);
         
         if(!IDS){
            return res.status(404).json({status:"Notfound"})
         }
      
     const METAD = Student[IDS];
     Student.splice(METAD,1)
         
         res.json({status:true,data:{}})
         
         });
   
      



export default router;