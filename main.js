

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



  var arrLang = {
    'en': {
    
    'text': "We are a small shop, the creators of which are very enthusiastic people. We work every day to provide our customers with the best service. We started our business in the spring of 2016 with the idea to focus on interesting and colorful objects and clothes. Today we sell interesting bags, socks and t-shirts. ",
    'bags': "Bags",
    'socks': "Socks",
    'shirts': "Shirts",
    'findus': "How to find us",
    'about': "About us",
    'description': "About our store"
    },
    'lv': { 
    'text': "Mēs esam mazs veikals, kura veidotāji ir ļoti entuziastiski cilvēki. Mēs strādājam katru dienu, lai sniegtu mūsu klientiem labāko servisu. Savu biznesu sākām 2016. gada pavasarī        ar domu fokusēties uz interesantiem un krāsainiem priekšmetiem un apģērbiem. Šodien pārdodam interesantas somas, zeķes un t-kreklus.",
    'bags': "Somas",
    'socks': "Zeķes",
    'shirts': "Krekli",
    'findus': "Kā mūs atrast",
    'about': "Par mums",
    'description': "Par mūsu veikalu"
    }
    };
    
    // Process translation
    $(function() {
    $('.translate').click(function() {
    var lang = $(this).attr('id');
    
    $('.lang').each(function(index, item) {
     $(this).text(arrLang[lang][$(this).attr('key')]);
    });
    });
    });