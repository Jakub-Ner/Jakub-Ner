---
title: 'Bore No More'
description: "We believe that Brain-Computer interface technology can revolutionize the way we interact with our devices. That's why we are developing a C# framework that will allow developers easy integration of BCI technology into their applications."
publishDate: 'Jul 07 2024'
isFeatured: true
seo:
  image:
    src: '/NTX-pipelon-members.png'
    alt: Bore No More team during NTX Hackathon 2023 in Vienna
---

![Pipelon team during NTX Hackathon 2023 in Vienna](/NTX-pipelon-members.png)

## Motivation

We believe that Brain-Computer interface technology can revolutionize the way we interact with our devices. To make it
happen we start from making this technology more accessible to developers.
In this way we can create a community of developers that can create new applications and services, what will make this
technology more popular and accessible to the end users.
The idea born in 2023. Wide research and game dev experience allowed us to create a
prototype - [boredom-adjusting Tetris](https://github.com/PipelonDevs/ntx_hack_2023) -
during [NTX Hackathon 2023](https://medium.com/neurotechx/the-second-global-annual-ntx-hackathon-2023-c23a68aef1a4) in
Vienna.

## Objectives

We are developing a C# framework that will allow developers easy integration of BCI technology into their applications.
This includes everything from device connection to classifying EEG signals and leveraging those insights to create
innovative and interactive user experiences. By providing comprehensive tools and support, we aim to accelerate the
adoption of BCI technology and unlock new possibilities in the field.

## Tasks

1. We started from designing the [self-contained experiment](https://github.com/PipelonDevs/tetris-bore-no-more) that
   enables us to collect data. The experiment contains 3 versions of Tetris game:
    - classic tetris
    - boring tetris
    - frustrating tetris
      Between each game there is resting part with neutral images.
2. I prepared the [pipeline](https://github.com/PipelonDevs/EEG_Datasets/tree/main/Classifier) for data processing and
   classification. Opted for Pytorch, due to flexibility.
3. We are working on the C# framework that will include:
    - device connection
    - data collection
    - classification triggered events
    - integration with Unity
4. We are planning to create multiple applications (not only games) that will showcase the capabilities of our
   framework. We already have agreement on cooperation with [TK Games](https://www.facebook.com/pwrtkgames/). 
5. We are planning to build a website with documentation and tutorials.
6. We are planning to validate effectiveness of passive Brain-Computer interface and prepare publication about it.
