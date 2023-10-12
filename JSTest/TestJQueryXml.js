
var fetchedXML = '<list><todo><id>1</id><title>Mow lawn</title><description>Must be done today</description><isCompleted>false</isCompleted><assigneeName>Troels</assigneeName></todo><todo><id>2</id><title>Do dishes</title><description>It&apos;s a huge mess in the kitchen</description><isCompleted>false</isCompleted><assigneeName>Anne</assigneeName></todo><todo><id>3</id><title>Walk dog</title><description>He gotta get sniffin&apos; stuff</description><isCompleted>false</isCompleted><assigneeName>Troels</assigneeName></todo><todo><id>4</id><title>Brush teeth</title><description>Pearly whites</description><isCompleted>true</isCompleted><assigneeName>Troels</assigneeName></todo></list>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(text,"text/xml");
var todoTags = xmlDoc.getElementsByTagName("todo");

console.log(todoTags.length);