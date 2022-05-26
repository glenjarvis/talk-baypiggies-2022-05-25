run:
	podman run -it baypiggies-demo:latest  /usr/src/app/demo4.py
our-python:
	podman run -it baypiggies-demo:latest
debug:
	podman run -it baypiggies-demo /bin/sh
build:
	podman build -t baypiggies-demo .
clean:
	# Warning: This assumes you are new and don't have other images and containers cleaned
	for hash in $(podman image ls -a | awk '{print $3}'); do echo ${hash}; podman image rm ${hash}; done
