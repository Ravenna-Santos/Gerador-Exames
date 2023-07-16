const btnGenerate = document.querySelector("#generate-pdf");
//deu bo quando começou a rolar/quebrar a pagina
btnGenerate.addEventListener("click", () => {

    console.log('entrou');

    //conteúdo do pdf será a div content
    const content = document.querySelector("#content");

    //formatação pdf
    const options = {
        margin: [10, 10, 10, 10],
        filename: "exame.pdf",
        //html2canvas: {scale: 2},
        pagebreak: { mode: 'avoid-all'},
        jsPDF: {unit:"mm", format: "a4", orientation: "portrait"}
    }

    // Gerar e baixar pdf
    html2pdf().set(options).from(content).save();
})