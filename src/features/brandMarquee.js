function brandMarquee() {
  // Finde alle Div-Elemente mit der Klasse
  const listContainers = document.querySelectorAll('.brand_collection-list')

  // Iteriere durch alle gefundenen Elemente
  listContainers.forEach((listContainer) => {
    // Erstelle eine tiefe Kopie des HTML-Inhalts
    const duplicatedHTML = listContainer.innerHTML + listContainer.innerHTML

    // Setze das duplizierte HTML zurück in das jeweilige "brand_collection-list"-Div
    listContainer.innerHTML = duplicatedHTML
  })
}

export default brandMarquee
