module.exports=
{
  array:function(a)
      {

           var temp=0;
           var flag=false;
           try{
               for (i=0;i<=a.length;i++){
                   if (flag==false){
                       temp=a[i];
                       flag=true;
                   }
                   else if(Math.abs(a[i])<Math.abs(temp)){
                           temp=a[i];
                       }
                   else if (Math.abs(a[i])== Math.abs(temp)){

                         if(a[i]>temp){
                             temp=a[i];
                         }
                   }
               }
               return temp;
           }
           catch(err){
               if (err.name){
                   return 'Null input not accepted';
               }
               return err;
           }

      }

  }