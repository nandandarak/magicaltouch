import subprocess
import os
import shutil

try:
    import imageio_ffmpeg
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
except ImportError:
    ffmpeg_exe = shutil.which("ffmpeg") or "ffmpeg"
input_video = r"D:\magicaltouch\Video Project 8.mp4"
output_dir = r"D:\magicaltouch\public\videos"
os.makedirs(output_dir, exist_ok=True)
output_video = os.path.join(output_dir, "holistic_yoga.mp4")

# Also extract a preview poster frame
poster_frame = r"D:\magicaltouch\public\images\holistic_yoga_poster.jpg"

print(f"Using ffmpeg: {ffmpeg_exe}")
print(f"Input: {input_video}")

# 1. Process video: crop out black bars (crop=1080:608:0:236), scale to 1920:1080 (16:9), h264 crf 20, faststart
cmd_video = [
    ffmpeg_exe, "-y",
    "-i", input_video,
    "-vf", "crop=1080:608:0:236,scale=1920:1080:flags=lanczos",
    "-c:v", "libx264",
    "-preset", "medium",
    "-crf", "20",
    "-an",
    "-movflags", "+faststart",
    output_video
]

print("Encoding cropped video...")
res = subprocess.run(cmd_video, capture_output=True, text=True)
if res.returncode != 0:
    print("Video error:", res.stderr)
else:
    print(f"Video saved: {output_video} ({os.path.getsize(output_video)} bytes)")

# 2. Extract a poster frame at 3 seconds for fast initial load
cmd_poster = [
    ffmpeg_exe, "-y",
    "-ss", "00:00:03.000",
    "-i", output_video,
    "-vframes", "1",
    "-q:v", "2",
    poster_frame
]

subprocess.run(cmd_poster, capture_output=True, text=True)
if os.path.exists(poster_frame):
    print(f"Poster frame saved: {poster_frame} ({os.path.getsize(poster_frame)} bytes)")
