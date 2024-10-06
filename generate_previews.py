from pdf2image import convert_from_path
import os

# PDF 文件路径
pdf_paths = ['assets/chapter1.pdf', 'assets/chapter2.pdf', 'assets/chapter3.pdf']
# 输出图像文件夹
output_folder = 'assets/previews'

# 创建输出文件夹（如果不存在）
os.makedirs(output_folder, exist_ok=True)

# 生成预览图
for pdf_path in pdf_paths:
    # 将 PDF 转换为图像
    images = convert_from_path(pdf_path, first_page=1, last_page=1)  # 只生成第一页
    # 获取文件名
    file_name = os.path.splitext(os.path.basename(pdf_path))[0] + '.png'
    # 保存图像
    images[0].save(os.path.join(output_folder, file_name), 'PNG')

print("预览图生成完毕！")