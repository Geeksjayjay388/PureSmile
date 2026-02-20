from PIL import Image
import os

images_to_optimize = [
    "herotooth.png",
    "footer.png",
    "teeths.png",
    "smile.png"
]

assets_dir = "/home/jacob-sihul/Desktop/PROJECTS/PureSmile/puresmile/src/assets"

for img_name in images_to_optimize:
    file_path = os.path.join(assets_dir, img_name)
    if os.path.exists(file_path):
        print(f"Optimizing {img_name}...")
        img = Image.open(file_path)
        
        # Convert to WebP with 80% quality
        webp_name = os.path.splitext(img_name)[0] + ".webp"
        webp_path = os.path.join(assets_dir, webp_name)
        img.save(webp_path, "WEBP", quality=80)
        
        orig_size = os.path.getsize(file_path)
        new_size = os.path.getsize(webp_path)
        print(f"  Saved to {webp_name}")
        print(f"  Size reduced from {orig_size/1024:.2f}KB to {new_size/1024:.2f}KB ({(1 - new_size/orig_size)*100:.1f}% reduction)")
    else:
        print(f"Skipping {img_name}, file not found.")
