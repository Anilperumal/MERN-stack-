let object={
    height:20,
    width:30,
    Area: function (){
        console.log("Area is",this.height*this.width);
    },

    Perimeter: function(){
        let width=2*(this.height+this.width);
        console.log("Perimeter",width);
    }
}

object.Area();
object.Perimeter();