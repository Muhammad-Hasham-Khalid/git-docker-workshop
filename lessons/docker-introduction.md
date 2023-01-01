---
path: "/docker-introduction"
title: "What is Docker & Why it is used?"
order: "2A"
section: "Introduction to Docker"
---

## What Are Containers?

A container is a unit of software that packages code and its dependencies so the application runs quickly and reliably across computing environments.

## Why Containers and Why we need containers?

### Bare Metal

Historically, if you wanted to run a web server, you either set up your own or you rented a literal server somewhere. We often call this "bare metal" because, well, your code is literally executing on the processor.

- More Maintenance is required
- Expensive
- Takes time

### Virtual Machines

Virtual machines are the next step. This is adding a layer of abstraction between you and the metal. Now instead of having one instance of Linux running on your computer, you'll have multiple guest instances of Linux running inside of a host instance of Linux.

### Public Cloud

- AWS, Azure, Google C

So, as alluded to above, you can nab a VM from a public cloud provider like Microsoft Azure or Amazon Web Services. It will come with a pre-allocated amount of memory and computing power (often called virtual cores or vCores because their dedicated cores to your virutal machine.) Now you no longer have to manage the expensive and difficult business of maintaining a data center but you do have to still manage all the software of it yourself: Microsoft won't update Ubuntu for you but they will make sure the hardware is up to date.

### Containers

And here we are, containers. As you may have divined, containers give us many of the security and resource-management features of VMs but without the cost of having to run a whole other operating system. It instead usings chroot, namespace, and cgroup to separate a group of processes from each other.

So now that we've been through why we need containers, let's go through the three things that make containers a reality.
