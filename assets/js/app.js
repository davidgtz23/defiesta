$(function() {
    
    $.getJSON( "https://defiesta-api.herokuapp.com/providers", function( data ) {
        var providers = [];

        console.log(data);
        $.each( data, function( key, val ) {
            providers.push(`
                <article class="home__places-item">
                    <img src="./assets/images/${val.image}" alt="Lugar">
                    <div class="title">
                        ${val.name}
                    </div>
                    <div class="location">
                        ${val.location}
                    </div>
                </article>
            `);
        });
   

        $('#providersList').html(providers);
    });

});

