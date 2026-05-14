---
layout: post
title: ArmNN / ONNX
date: 2018-06-01
---

# ArmNN / ONNX

As a summer intern in Arm's Machine Learning team, I spent 3 months working
on ArmNN's 18.08 release. ArmNN is an open-source inference framework for
running neural networks efficiently on Arm hardware.

My internship combined release engineering tasks with parser architecture work,
from prototype to production code in C++.

## Tasks completed

### Improving memory efficiency

I evaluated where zero-copy tensor sharing could be used safely and where it
could not, due to alignment constraints. The objective was to estimate the
real memory savings before deciding where implementation effort was justified.

### Supporting LSTM operator in Android VTS tests

To help ArmNN pass Android vendor test requirements, I worked on LSTM operator
support in the Android path. This required parsing operator inputs in the
correct order and mapping them to the corresponding ArmNN layer creation flow.

### TensorFlow Lite parser and Android deployment

I worked on TensorFlow Lite parsing and inference execution support, including
adaptations needed because TensorFlow Lite has different parser constraints than
TensorFlow/Caffe paths. I also contributed to Android cross-compilation and
deployment setup so inference binaries and libraries could be run on-device.

### ONNX parser design and implementation

A key part of the internship was designing and implementing ONNX support.

The first design decision was between:

- deriving a backend from ONNX Python abstractions, or
- implementing a native C++ ONNX parser inside ArmNN.

The C++ route was chosen to keep integration aligned with ArmNN architecture
and release constraints.

Implementation was structured in three main phases:

- **Loading**: read ONNX model content (text or binary) via protobuf support.
- **Parsing**: map ONNX graph nodes/operators into ArmNN network layers.
- **Building**: integrate parser code as a reusable library and wire it into
  ArmNN build and deployment flows.

### Prototype to production

The ONNX parser work started with a prototype to validate end-to-end inference
on representative models (including MNIST), then moved into productionization:

- splitting work into reviewable tasks,
- adding unit tests per supported node/operator,
- adding end-to-end execution checks,
- integrating ONNX into inference tooling used by ArmNN.

During parser hardening, I also worked on practical conversion issues such as:

- detecting FullyConnected patterns represented as `MatMul + Add` in ONNX,
- handling constant-input detection beyond initializer-only checks,
- keeping parser steps maintainable across loading, preprocessing, node
  creation, and final connection stages.

### Integration status and next release prep

By the end of the 18.08 release cycle, ONNX integration supported execution of
core models with correct results, and preparatory work had started for broader
operator coverage in later releases.

I also contributed to preparation for the next release by analyzing unsupported
operator usage in target models (for example DeepSpeech-related flow-control
operators) to estimate implementation scope.

## Challenges and lessons

This internship was technically demanding because work spanned parser internals,
release constraints, testing rigor, and cross-team collaboration.

The strongest lessons were:

- parser work is as much about maintainability and test strategy as feature
  delivery,
- model format interoperability requires careful operator-level reasoning,
- production constraints and release planning shape architecture decisions from
  day one.

## Further links

- [Internship report (PDF)](/img/Internship_report.pdf)
- [ArmNN repository](https://github.com/ARM-software/armnn)
- [ONNX format documentation](https://onnx.ai/)
