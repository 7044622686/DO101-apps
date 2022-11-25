            Enter First Number :
            <input type="text" id="Text1" name="TextBox1">
            

            Enter Second Number :
            <input type="text" id="Text2" name="TextBox2">
            

            Result :
            <input type="text" id="txtresult" name="TextBox3">
            

         <input type="button" name="clickbtn" value="Display Result" onclick="add_number()">


        function add_number() {
            var first_number = parseInt(document.getElementById("Text1").value);
            var second_number = parseInt(document.getElementById("Text2").value);
            var result = first_number + second_number;
            document.getElementById("txtresult").value = result;
        }
