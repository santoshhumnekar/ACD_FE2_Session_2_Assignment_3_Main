function display(boolean) {

    // document.getElementById('lblStatusstart').innerHTML = 'Started';	
    chnglbl('lblStatusstart', 'Started...');

    let promobj = new Promise(function(resolve, reject) {

        chnglbl('lblPromisestart', 'Promise Started');

        let iscompleted = boolean;

        if (iscompleted) {

            chnglbl('lblprommade', ' Promise is Made');

            resolve('Resolved');
        } else {

            chnglbl('lblprommade', ' Promise is Made');

            reject('Rejected');
        }

    });

    promobj.then(function(resolvedstatus) {

        chnglbl('lblpromfulfiled', ' Promise is fulfiled and Status is ' + resolvedstatus);

    }).catch(function(rejectstatus) {

        chnglbl('lblpromfulfiled', ' Promise is fulfiled and Status is ' + rejectstatus);

    });
}

function chnglbl(id, msg) {

    document.getElementById(id).innerHTML = msg;

}