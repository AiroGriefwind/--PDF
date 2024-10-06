document.addEventListener('DOMContentLoaded', () => {
    const pdfPaths = ['assets/chapter1.pdf', 'assets/chapter2.pdf', 'assets/chapter3.pdf'];

    pdfPaths.forEach((pdfPath, index) => {
        const img = document.getElementById(`preview${index + 1}`);

        pdfjsLib.getDocument(pdfPath).promise.then(pdf => {
            pdf.getPage(1).then(page => {
                const viewport = page.getViewport({ scale: 0.2 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                page.render(renderContext).promise.then(() => {
                    img.src = canvas.toDataURL(); // 将画布内容转换为图像
                });
            });
        });
    });
});