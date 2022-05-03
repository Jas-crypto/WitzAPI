# WitzAPI Beschreibung

Diese Service bietet die Möglichkeit, Witze in verschiedenen Kategorien zu lesen, zu ändern, hinzuzufügen und zu löschen.

Beschreibt ein konkretes Anwendungsszenario für den entwickelten
Service und schildert (in wenigen Worten) eine mögliche
Gesamt-Architektur in welcher sich dieser befinden könnte.

Benutzer (also Client) hat Langeweile und möchte unterhalten werden, deswegen sucht er nach Witzen. Dabei landet er auf unsere Webseite, welche auf einen Server liegt. Dort findet er verschiedene Arten von Witzen. Er entscheidet sich beispielsweise für Studentenwitze und in dieser Kategorie findet er zahlreiche Witze und fühlt sich zufrieden. Zudem gibt es einen Server, wo unser Backend und Datenbank deployt wird.

Welche Probleme können entstehen, wenn der entwickelte Service von
mehreren Parteien verwendet wird? Beschreibt zwei Probleme sowie
mögliche Lösungen.

1. Wenn mehrere Clients versuchen die Webseite zu benutzen, kann es passieren, dass das Backend so viele Anfragen an die Datenbank schickt und die Datenbank überlastet wird und nicht mehr zur Verfügung steht. Eine Mögliche Lösung wäre eine Warteschlangenbasierter Lastenausgleich. 

2. Stehen das Backend und die Datenbank kurz nicht zur Verfügung, dann könnte man eine neue Abfrage nach eine gewisse Zeit starten, dies wird durch Fehlerhandling in Frontend durchgeführt.

Was ist abseits der reinen Programmierung für die Produktivsetzung des
entwickelten Services zu beachten? Nenne mindestens zwei Aspekte und
führe diese in ein paar Sätzen aus.

1. Eine Domain wird benötigt. Dafür muss erstmal geprüft werden, welche Domain in Frage kommt und welche verfügbar ist. Dann muss diese Domain gesichert werden, und unser Frontend drauf gehostet werden.

2. Die Datenbank muss mit Witzen befüllt werden. Dafür werden manuell spezielle Kategorien von den Witzen in der Datenbank geschrieben, dies könnte auch automatisch durch ein Programm gemacht werden.

3. Ein Monitoring sollte eingebaut werden, damit der Service überwacht werden kann und bei massiven Problemen schnell reagiert werden kann. Zum Beispiel kann man eine Nachricht per E-Mail bekommen.





