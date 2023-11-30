const path = require('path');
const fs = require('fs');

const uploadPDF = async (req, res) => {
    try {
        const file = req.files.pdf;
        const PDFName = `${Date.now()}-${file.name}`;
        const filePath = path.join(__dirname, "../public/images", PDFName);
        file.mv(filePath, (err) => {
            if (err) {
                res.status(400).json({ message: "Something went wrong !" });
            }
            res.status(200).json({ message: "Successfully uploaded", name: PDFName });
        });

        setTimeout(() => {
            fs.unlinkSync(filePath);
        }, 600000);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong !" })
    }
}

module.exports = { uploadPDF }