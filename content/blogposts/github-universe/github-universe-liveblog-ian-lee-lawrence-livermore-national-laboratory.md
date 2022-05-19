---
title: 'GitHub Universe liveblog: “Open source for National Security”'
authors:
  - name: Beyang Liu
    url: https://twitter.com/beyang
publishDate: 2016-09-15T00:00-07:00
tags: [
  "github-universe"
]
slug: github-universe-liveblog-ian-lee-lawrence-livermore-national-laboratory
heroImage: https://images.ctfassets.net/le3mxztn6yoo/20fvPueXZGqOYSq2Oo68M0/a3434fc1cac1aaa96f9f4c3f913c8722/1_8LeAkNACLvgEnCXP-1qUBw.jpeg
published: true
---



[Ian Lee](https://twitter.com/ianlee1521) of Lawrence Livermore National Laboratory talks about how LLNL is using, producing, and encouraging open source in government ([slides here](https://speakerdeck.com/ianlee1521/developing-open source-in-service-to-national-security)).

Open source software and national security — two topics you don’t hear together too often. But there's a lot of work in government agencies being done right now — open source, inner source, and closed source.

![1*8LeAkNACLvgEnCXP-1qUBw](//images.contentful.com/le3mxztn6yoo/20fvPueXZGqOYSq2Oo68M0/a3434fc1cac1aaa96f9f4c3f913c8722/1_8LeAkNACLvgEnCXP-1qUBw.jpeg)

Lawrence Livermore grew out of the aftermath of the Los Alamos Project, one of 17 Department of Energy national labs, one of 3 national labs that are responsible for reporting on the readiness state of the U.S. nuclear stockpile.

You also may have seen us on Star Trek Into Darkness. The warp core came from them.

We do a lot of closed source, but also a good amount of open source. They don’t want to reinvent all the great things that the open source community has already created.

Over the past 20 years, they’ve had 3 out of the 16 #1 supercomputing systems. That’s a lot of computation power.

Because of their unique computing resources and needs, they’ve developed their own operating system: TOSS, the Tri-Lab Operating System. It’s based on Red Hat Linux with additions to support HPC (large, interconnected clusters):

*   Low Latency Interconnect: Infiniband
*   Parallel File System: Lustre
*   Resource Manager: SLURM

They work closely with the open communities whose tools they’re leveraging.

SLURM is a resource manager.

![1*jfhJ1CvpscXbwWI9bKrjhA](//images.contentful.com/le3mxztn6yoo/3ymcXxCt1e4wmYeS2KW2Im/35e9bfb46a3caa024aeee389fb157d96/1_jfhJ1CvpscXbwWI9bKrjhA.jpeg)

Flux is a family of projects for site-customized resource management systems, an evolution of SLURM for more computing systems in 2016.


![1*C MVa05r60r6Wj20l-l Sw](//images.contentful.com/le3mxztn6yoo/4ZDbBuCUvSe6Scks0iAU02/73186b472929a75d79eeb0b785dec01a/1_C_MVa05r60r6Wj20l-l_Sw.jpeg)

They ported ZFS to Linux. Traditional filesystems, like ext4, don’t scale for their workflows. ext4 only scales up to 16TB volumes. LLNL led the work to port ZFS to Linux. It’s now standard in Ubuntu, as easy as `apt-get install zfs`.

![1*YKfyv-MPvpdJ9omwdipNFQ](//images.contentful.com/le3mxztn6yoo/29wUpO2MTqU8iGouaoqIoc/208c3f427e71fe2f07fe0aa77bd1af65/1_YKfyv-MPvpdJ9omwdipNFQ.jpeg)

SPACK: the supercomputing package manager (written in Python)

![1*WHnqVyIKytDcPuhFST2cFg](//images.contentful.com/le3mxztn6yoo/6NUM4WidfGEYe20qKgiIMS/3e9fb55077f438558dceaa5439270840/1_WHnqVyIKytDcPuhFST2cFg.jpeg)

ESGF: the first decentralized database (petabytes!) for handling climate science data.

What languages does LLNL use?

![1*yU1pnjwEHnIjeaZPZp32Ww](//images.contentful.com/le3mxztn6yoo/1N4Ir5VCCQiuwcE4Ou6c6U/310a55b9ea76493d7e543b629d3888c5/1_yU1pnjwEHnIjeaZPZp32Ww.jpeg)

They have a GitHub pages portal to help you explore their code. GitHub code search is okay, but it’s difficult to filter repositories in specific languages and specific purposes. So they’re building a portal to help people explore the code: [http://software.llnl.gov/](http://software.llnl.gov/).

![1*Bgvy4nN7VawWrWgelAXxpg](//images.contentful.com/le3mxztn6yoo/60RejJDUYgGEOEsSMWkuYY/d1d0e4332241a82707ebce8bbad53a80/1_Bgvy4nN7VawWrWgelAXxpg.png)
