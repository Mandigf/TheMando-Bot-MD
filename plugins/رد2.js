//*رد بوت ماندو 

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*اهلا يعمري معاك بوت ماندو*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايما يارب 💎🩵*'
     ]; 
 }else if (/^كداب|شرير$/i.test(m.text)) { 
     responses = [ 
'*يوجع القلب​​​​​​​​​​​​😅*'
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
'*مطوري مرتبط اه بس انا بوت ي هبله ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🙂*'
   ]; 
   }else if (/^بوت بتحبني؟|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
'*لو بنت بحبك اكتر ولو ولد استرجل يخويا*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^بوت بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ايوه*',
'*بوت ماندو وسونيك مبيكرهش حد*',
'*محصلش متعيطش/متعيطيش بقا*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هو هو اخويا النرم يعم*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*وانا مبحبكش*',  

     ]; 
   } else if (/^عرص|ي عرص|شرموط|ي شرموط|لبوه|ي لبوه$/i.test(m.text)) { 
     responses = [ 
'*لو بتشتم البوت حابب اقولك اسكت يبن الاحبه بدل ما اشدك من شعر طيزك*'
     ]; 
     }else if (/^انتا مين|مين انتا|انتا مين$/i.test(m.text)) { 
     responses = [ 
       'اععع انا بوت ماندو يخويا',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^بكرهك$/i.test(m.text)) { 
     responses = [ 
       '*طيب 🐦💔*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^.menu$/i.test(m.text)) { 
     responses = [ 
       '*غلط اكتب .اوامر*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
    }else if (/^بوسه|هات بوسه|.بوسه|kiss$/i.test(m.text)) { 
     responses = [ 
        '*محححححححح 💋🫦*' ,  
     ];
    }else if (/^اسكت$/i.test(m.text)) { 
     responses = [ 
        '*مش بمزاجك بلص اسكت انت ☺️❤️*' ,  
     ];
    }else if (/^لاوسيا 🥺💗$/i.test(m.text)) { 
     responses = [ 
        '*دي قلب مطوري دي روح مطوري ده مطوري ماندو بيحبها فشخ و ربنا بيدمنها اوي و ملوش الا غرها ربنا يدمهم لبعض و ي رب يكونو من نصيب بعض ادعلهم 🥹💘💘💘💘💘💘💘💘💘💘💘🥹*' ,  
     ];
    }else if (/^مللللللل$/i.test(m.text)) { 
     responses = [ 
         '*بص انا عارف انك مبضون وانا برضو مبضون و مطوري برضو مبضون بس نعمل ايه هي الدنيا بضان كده ايه الجديد 🙂💔*'  ,  
     ];
    }else if (/^وحشتني|واحشتني$/i.test(m.text)) { 
     responses = [ 
         '*انت اكتر عمتا 🥹💘*'  ,  
     ];
    }else if (/^طارق$/i.test(m.text)) { 
     responses = [ 
         '*ميا عشان شرقت 🐦❤️‍🩹*'  ,  
     ];
    }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك عمتا 🥹💗*'  ,  
     ];
     }else if (/^كلموني$/i.test(m.text)) { 
     responses = [ 
         '*تعي بف 🫦❤️‍🔥*'  ,  
     ];
    }else if (/^بوت احتاويني|بوت احتاويني|احتاويني|احتويني$/i.test(m.text)) { 
     responses = [ 
         '*تعي في حضني ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🥹​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️*'  ,  
     ];
    }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
         '*بدمنك 🥺❤️*'  ,  
     ];
    }else if (/^بعشقك$/i.test(m.text)) { 
     responses = [ 
         '*قلبي اصلا ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🌚❤️*'  ,  
     ];
    }else if (/^بدمنك$/i.test(m.text)) { 
     responses = [ 
         '*ي بختي اصلا 🥺❤️✨*'  ,  
     ];
    }else if (/^يسطا$/i.test(m.text)) { 
     responses = [ 
         '*ختك ف البسطا انت هتصحبني ي عم 😒*'  ,  
     ];
    }else if (/^حبني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك و بموت فيك و بدمنك و بعشقك ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🥹​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️*'  ,  
     ];
    }else if (/^لاوسيكاا$/i.test(m.text)) { 
     responses = [ 
         '*بحب لاوسيكاا بموت في اروي بعشق اروي بدمن اروي اروي دي قلبي من جوه 🥺💋🫦💘*'  ,  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
 ‏