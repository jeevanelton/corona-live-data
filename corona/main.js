var ourRequest = new XMLHttpRequest()
ourRequest.open('GET', 'https://api.covid19api.com/summary')
ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHtml(ourData)
    dataTable(ourData)
};
ourRequest.send()

function renderHtml(data) {
    const totalCases = data.Global;
    document.getElementById("confirmed").innerHTML = totalCases.TotalConfirmed;
    document.getElementById("Recovered").innerHTML = totalCases.TotalRecovered;
    document.getElementById("Deaths").innerHTML = totalCases.TotalDeaths;
};

function dataTable(data) {
    var country = data.Countries
    cdata(country)
    for (i = 0; i <= country.length; i++) {
        document.getElementById("tablerow").insertRow(i).innerHTML = ("<tr>" + "<td>" + country[i].Country + "</td>" + "<td>" + country[i].TotalConfirmed + "</td>" + "<td>" + country[i].TotalRecovered + "</td>" + "<td>" + country[i].TotalDeaths + "</td>" + "</tr>")
    }

}


function cdata(country) {
    searchbox(country)
    $(document).on("keypress", "input", function (e) {
        if (e.which == 13) {
            var str = $(this).val();
            var name = str.charAt(0).toUpperCase() + str.slice(1)
            if (str === null | str === '') {
                for (i = 0; i <= country.length; i++) {
                    document.getElementById("tablerow").insertRow(i).innerHTML = ("<tr>" + "<td>" + country[i].Country + "</td>" + "<td>" + country[i].TotalConfirmed + "</td>" + "<td>" + country[i].TotalRecovered + "</td>" + "<td>" + country[i].TotalDeaths + "</td>" + "</tr>")
                }
            } else {
                return check(name, country);
            }

            function check(str, country) {
                status = $("#tablerow").html("NOT Found Refesh a page")
                for (i = 0; i <= country.length; i++) {
                    if (str == country[i].Country) {
                        status = $("#tablerow").html("<tr>" + "<td>" + country[i].Country + "</td>" + "<td>" + country[i].TotalConfirmed + "</td>" + "<td>" + country[i].TotalRecovered + "</td>" + "<td>" + country[i].TotalDeaths + "</td>" + "</tr>");
                        break;
                    }
                }
                return status
            }
        }
    })
}

function searchbox(country) {
    $("#searchClick").click(function () {
        var str = $("#search").val();
        var name = str.charAt(0).toUpperCase() + str.slice(1)
        if (str === null | str === '') {
            for (i = 0; i <= country.length; i++) {
                document.getElementById("tablerow").insertRow(i).innerHTML = ("<tr>" + "<td>" + country[i].Country + "</td>" + "<td>" + country[i].TotalConfirmed + "</td>" + "<td>" + country[i].TotalRecovered + "</td>" + "<td>" + country[i].TotalDeaths + "</td>" + "</tr>")
            }
        } else {
            return check(name, country);
        }

        function check(str, country) {
            status = $("#tablerow").html("NOT Found Refesh a page")
            for (i = 0; i <= country.length; i++) {
                if (str == country[i].Country) {
                    status = $("#tablerow").html("<tr>" + "<td>" + country[i].Country + "</td>" + "<td>" + country[i].TotalConfirmed + "</td>" + "<td>" + country[i].TotalRecovered + "</td>" + "<td>" + country[i].TotalDeaths + "</td>" + "</tr>");
                    break;
                }
            }
            return status
        }
        check(name, country)
    })
};


$(document).ready(function () {
    BindControls();
});

function BindControls() {
    var Countries = ['ALA Aland Islands',
        'Afghanistan',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory',
        'British Virgin Islands',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo (Brazzaville)',
        'Congo (Kinshasa)',
        'Cook Islands',
        'Costa Rica',
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        "Côte d'Ivoire",
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands (Malvinas)',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard and Mcdonald Islands',
        'Holy See (Vatican City State)',
        'Honduras',
        'Hong Kong, SAR China',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran, Islamic Republic of',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        'Korea (North)',
        'Korea (South)',
        'Kuwait',
        'Kyrgyzstan',
        'Lao PDR',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao, SAR China',
        'Macedonia, Republic of',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia, Federated States of',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestinian Territory',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Republic of Kosovo',
        'Romania',
        'Russian Federation',
        'Rwanda',
        'Réunion',
        'Saint Helena',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Pierre and Miquelon',
        'Saint Vincent and Grenadines',
        'Saint-Barthélemy',
        'Saint-Martin (French part)',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and the South Sandwich Islands',
        'South Sudan',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Svalbard and Jan Mayen Islands',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic (Syria)',
        'Taiwan, Republic of China',
        'Tajikistan',
        'Tanzania, United Republic of',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands',
        'Tuvalu',
        'US Minor Outlying Islands',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela (Bolivarian Republic)',
        'Viet Nam',
        'Virgin Islands, US',
        'Wallis and Futuna Islands',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe',
    ];

    $('#search').autocomplete({
        source: Countries,
        minLength: 0,
        scroll: true
    }).focus(function () {
        $(this).autocomplete("search", "");
    });
}