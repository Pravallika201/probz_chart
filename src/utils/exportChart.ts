import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export const exportChartAsImage = (chartId: string, filename: string) => {
  const chart = document.getElementById(chartId);
  if (chart) {
    html2canvas(chart).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, filename);
        }
      });
    });
  }
};
