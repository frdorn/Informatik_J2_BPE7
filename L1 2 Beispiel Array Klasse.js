var sgwgj2 = ["Hannes", "Jakob", "Mirko", "Vivien", "Alex"];
// Bestimmen der Länge des Arrays sgwgj2 und Speichern in einer Variable
var anzSchuelerInnen = sgwgj2.length;
// Deklarieren und Initialisieren einer Variable, in der die Ausgaben gesammelt werden 
var meldung = "";
for (var i = 0; i < anzSchuelerInnen; i++) {
  // Anfügen von Hallo und aktuellem Namen an die Variable meldung
  meldung += "Hallo " + sgwgj2[i] + "\n"
}
alert(meldung);
