
    function human(){
      this.name = 'name';
      this.age = 0;
      this.sex = 'sex';
      this.height = 0;
      this.weight = 0;
    }
    function worker(){
      this.company = 'google';
      this.salary = 10000;
      this.work = function(){
        return 'is working';
      };
    }
    function student(){
      this.university = 'NTUU KPI';
      this.scholarship = 100;
      this.watchTV = function(){
        return 'is watching tv';
      };
    }
 
    var newHuman = new human();
    worker.prototype = newHuman;
    student.prototype = newHuman;
 

    var newStudent = new student();
    var newWorker = new worker();
  
      newWorker.name = 'Dima';
      newWorker.age = 27;
      newWorker.sex = "man";
      newWorker.height = 180;
      newWorker.weight = 70;
   
      newStudent.name = "Kate";
      newStudent.age  = 20;
      newStudent.sex  = "woman";
      newStudent.height = 170;
      newStudent.weight = 50;


      console.log('Worker:',newWorker.name,
             "\n  age:", newWorker.age,
             "\n  sex:", newWorker.sex,
             "\n  height:", newWorker.height,
             "\n  weight:", newWorker.weight     
      );
      console.log(newWorker.name,newWorker.work()); 
      
      
      console.log('\nStudent:',newStudent.name,
             "\n  age:", newStudent.age,
             "\n  sex:", newStudent.sex,
             "\n  height:", newStudent.height,
             "\n  weight:", newStudent.weight);
      console.log(newStudent.name,newStudent.watchTV()); 


