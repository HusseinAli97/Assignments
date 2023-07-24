quoteGroup = [
    {quote:"لا يريد الهمّ منك، أكثر من أن تريدَه فيأتي",author:"مصطفى الرافعي."},
    {quote:"من خاف ظهور الحق خبت به الأمور",author:"الإمام علي بن أبي طالب رضي الله عنه"},
    {quote:"لا يعلو كثير إلا بكثير",author:" الخليفة العباسي المأمون"},
    {quote:"الإنسان المثقف هو من يعرف مقدار جهله",author:" ابن سينا"},
    {quote:"العدالة تتطلب منك أن تضع نفسك في مكان الآخرين",author:"نلسون مانديلا"},
    {quote:"حاول أن تكن شخصًا لم يسبق أن تكون عليه، وستكون قادرًا على تحقيق ما لم تستطعه قبل ذلك",author:"مايا أنجيلو"},
    {quote:" لا تخشى الفشل، بل اخشَ فقط عدم المحاولة",author:"مايكل جوردن"},
    {quote:"لا تخف من الفشل، بل استفد منه وابقَ مستمرًا في التعلم والتحسين",author:" الإمام الشافعي"},
    {quote:"العلم لا يحتمل العزلة، بل يحتاج إلى التعاون والتبادل الفكري",author:"الخوارزمي"},
    {quote:"لايكفي الفهم بالتجريد، بل يجب أن يكون المرء في الحقيقة.",author:"ابن رشد"},
    {quote:"إن التعامل مع البرمجة يشبه حل جوز الكمثرى - من الخارج يبدو صعباً، ولكن عندما تستوعبه تجده سهلاً ولذيذاً",author:"جيمس جوسلينج"},
];
var quotesItem = document.getElementById("quote");
var authorItem = document.getElementById("author");
var indicator =[]
function generateQuote(){
    var iterator = randomIndex() ;
    quotesItem.textContent = `"${quoteGroup[iterator].quote}"`;
    authorItem.textContent = `-- ${quoteGroup[iterator].author}`;
}
console.log(indicator);
function randomIndex(){
    var indexingNum;
    do {
        // track random numbers if number inside indicator repeat loop and push it in indecator list
        indexingNum = Math.floor(Math.random() * (quoteGroup.length))
    } while (indicator.includes(indexingNum))
    indicator.push(indexingNum);
    // ? rest random number tracker list when have same length with main quote list
    if (indicator.length === quoteGroup.length){
        indicator = [];
    }
    return indexingNum;
}

