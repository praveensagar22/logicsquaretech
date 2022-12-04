

function findCaliforniaCafes(searchword) {
    
    const cafes=[
        {
        "name": "Bazaar Cafe",
        "place_id": "kjk234g4gcvfx8usg1l33pi"
        }, {
        "name": "Ashley's Cafe",
        "place_id": "12hydbdf76sljfts87sbfis"
        }, {
        "name": "Avenue Cafe",
        "place_id": "skjd86svvfdrsv55svbvf3f"
        }, {
        "name": "Hi-Lo Cafe",
        "place_id": "mjdhgetr4pojfyts22fzfsh"
        }, {
        "name": "California Chicken Cafe",
        "place_id": "12hydbdf76sljfts87sbfis"
        }, {
        "name": "Avenue Bakery Cafe",
        "place_id": "jahgde7wgdiau8ewsahgosd"
        }, {
        "name": "Philz Coffee",
        "place_id": "urhw3837ehalod7w02b7835"
        }
        ];
    const places=[{
        "id": "jahgde7wgdiau8ewsahgosd",
        "street_no": "60H",
        "locality": "Solomos Island Road",
        "postal_code": "20688",
        "lat": "36.7783 N",
        "long": "119.4179 W"
        }, {
        "id": "12hydbdf76sljfts87sbfis",
        "street_no": "1B",
        "locality": "Macarthur Blvd",
        "postal_code": "20619",
        "lat": "38.1781 N",
        "long": "118.4171 W"
        }, {
        "id": "kjk234g4gcvfx8usg1l33pi",
        "street_no": "45250",
        "locality": "Worth Avenue, Unit A",
        "postal_code": "20619",
        "lat": "36.1152",
        "long": "117.521"
        }, {
        "id": "saswe3s6yydtdr52hsd72yst",
        "street_no": "1X",
        "locality": "Macarthur Blvd",
        "postal_code": "20687",
        "lat": "36.7783",
        "long": "119.4179"
        }, {
        "id": "skjd86svvfdrsv55svbvf3f",
        "street_no": "7S",
        "locality": "Three Notch Road",
        "postal_code": "20619",
        "lat": "36.83",
        "long": "119.6"
        }, {
        "id": "mjdhgetr4pojfyts22fzfsh",
        "street_no": "22803",
        "locality": "Gunston Dr Lexington Park",
        "postal_code": "20688",
        "lat": "35.7788",
        "long": "119.979"
        }, {
        "id": "urhw3837ehalod7w02b7835",
        "street_no": "225",
        "locality": "Macarthur Blvd",
        "postal_code": "20687",
        "lat": "35.77813",
        "long": "119.41791"}];



        var s_list=[]
        for(var obj in cafes){
            const objs=cafes[obj];
             for(var j in objs){
                if (j=="name"){
                    if(objs["name"].search(searchword)!= -1){
                        s_list.push([objs["place_id"],objs["name"]]);
                    };
                
                
                }
        
             }
        }
        //console.log(s_list);
        for(var i in s_list){
            let aid=s_list[i][0]
            //console.log(aid);
            let aval=s_list[i][1]
            for(var j in places){
                p_value=places[j]
                
                    if(aid==p_value["id"]){
                        
                        delete p_value.id
                        p_value["name"]=aval
                        console.log(p_value);
                    };
                
            }
        }

    
    
    // return results
}
findCaliforniaCafes(prompt())