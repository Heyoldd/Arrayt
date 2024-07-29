        let array = ['4', '2', '34', '4', '1', '12', '1', '4']

        function run_lay(){
            const remove = [1,2,3,5,6,7];

            for (let i = remove.length - 1; i>= 0; i--)
                array.splice(remove[i], 1);

            console.log(array)
        }
run_lay()